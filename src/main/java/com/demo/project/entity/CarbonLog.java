package com.demo.project.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "t_carbonlog")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarbonLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false, precision = 8, scale = 2)
    private BigDecimal transportEmission;

    @Column(nullable = false, precision = 8, scale = 2)
    private BigDecimal foodEmission;

    @Column(nullable = false, precision = 8, scale = 2)
    private BigDecimal energyEmission;

    @Column(nullable = false, precision = 8, scale = 2)
    private BigDecimal totalEmission;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}

