package com.demo.project.controller;

import java.time.LocalDate;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.demo.project.dto.SurveyRequest;
import com.demo.project.entity.*;
import com.demo.project.repository.*;
import com.demo.project.service.CarbonCalculationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/survey")
@RequiredArgsConstructor
public class SurveyController {

    private final SurveyRepository surveyRepo;
    private final CarbonLogRepository carbonLogRepo;
    private final UserRepository userRepo;
    private final CarbonCalculationService carbonService;

    @PostMapping
    public CarbonLog submitSurvey(@RequestBody SurveyRequest request) {

        // ✅ get email from JWT
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        // ✅ fetch user
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // ✅ save survey
        Survey survey = new Survey();
        survey.setTransportMode(request.getTransportMode());
        survey.setDietType(request.getDietType());
        survey.setEnergyUsage(request.getEnergyUsage());
        survey.setUser(user);
        surveyRepo.save(survey);

        // ✅ calculate emissions
        var transport = carbonService.calculateTransport(request.getTransportMode());
        var food = carbonService.calculateDiet(request.getDietType());
        var energy = carbonService.calculateEnergy(request.getEnergyUsage());
        var total = carbonService.total(transport, food, energy);

        // ✅ save carbon log
        CarbonLog log = new CarbonLog();
        log.setDate(LocalDate.now());
        log.setTransportEmission(transport);
        log.setFoodEmission(food);
        log.setEnergyEmission(energy);
        log.setTotalEmission(total);
        log.setUser(user);

        return carbonLogRepo.save(log);
    }
}
