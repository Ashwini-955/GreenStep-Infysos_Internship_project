package com.demo.project.service;

import java.math.BigDecimal;
import org.springframework.stereotype.Service;

@Service
public class CarbonCalculationService {

    public BigDecimal calculateTransport(String mode) {
        return switch (mode.toLowerCase()) {
            case "car" -> BigDecimal.valueOf(2.5);
            case "bike" -> BigDecimal.valueOf(0.5);
            case "public" -> BigDecimal.valueOf(1.2);
            default -> BigDecimal.ONE;
        };
    }

    public BigDecimal calculateDiet(String diet) {
        return diet.equalsIgnoreCase("nonveg")
                ? BigDecimal.valueOf(2.0)
                : BigDecimal.valueOf(1.0);
    }

    public BigDecimal calculateEnergy(BigDecimal units) {
        return units.multiply(BigDecimal.valueOf(0.5));
    }

    public BigDecimal total(BigDecimal t, BigDecimal f, BigDecimal e) {
        return t.add(f).add(e);
    }
}
