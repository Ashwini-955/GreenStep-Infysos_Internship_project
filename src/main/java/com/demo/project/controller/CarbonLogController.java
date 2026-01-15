package com.demo.project.controller;

import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.demo.project.entity.CarbonLog;
import com.demo.project.entity.User;
import com.demo.project.repository.CarbonLogRepository;
import com.demo.project.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/carbon")
@RequiredArgsConstructor
public class CarbonLogController {

    private final CarbonLogRepository carbonLogRepo;
    private final UserRepository userRepo;

    @GetMapping("/my-history")
    public List<CarbonLog> getMyHistory() {

        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return carbonLogRepo.findByUser(user);
    }
}
