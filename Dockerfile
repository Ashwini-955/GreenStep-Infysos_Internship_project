# Use Java 17
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Build the project
RUN ./mvnw clean package -DskipTests

# Expose port
EXPOSE 8091

# Run the app
CMD ["java", "-jar", "target/CarbonPersonalFootPrintApp-1-0.0.1-SNAPSHOT.jar"]
