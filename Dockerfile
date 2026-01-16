FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copy only required files
COPY . .

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

EXPOSE 8091

CMD ["java","-jar","target/CarbonPersonalFootPrintApp-1-0.0.1-SNAPSHOT.jar"]
