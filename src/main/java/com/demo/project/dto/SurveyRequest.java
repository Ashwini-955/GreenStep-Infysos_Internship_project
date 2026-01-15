package com.demo.project.dto;

import java.math.BigDecimal;
import lombok.Data;

@Data
public class SurveyRequest {

    private String transportMode;   // car, bike, public
    private String dietType;        // veg, nonveg
    private BigDecimal energyUsage; // units/month
}
