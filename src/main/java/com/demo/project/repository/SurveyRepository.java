package com.demo.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.project.entity.Survey;

public interface SurveyRepository extends JpaRepository<Survey, Integer> {
}

