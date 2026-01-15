package com.demo.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.project.entity.CarbonLog;
import com.demo.project.entity.User;

public interface CarbonLogRepository extends JpaRepository<CarbonLog, Integer> {

    List<CarbonLog> findByUser(User user);
}
