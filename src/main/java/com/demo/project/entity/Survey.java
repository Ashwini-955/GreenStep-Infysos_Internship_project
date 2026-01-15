package com.demo.project.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "t_survey")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String transportMode;

    @Column(nullable = false)
    private String dietType;

    @Column(nullable = false, precision = 8, scale = 2)
    private BigDecimal energyUsage;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}

