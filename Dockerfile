FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# ✅ First copy files
COPY . .

# ✅ Then give permission
RUN chmod +x mvnw

# ✅ Build project
RUN ./mvnw clean package -DskipTests

EXPOSE 8091

CMD ["java","-jar","target/CarbonPersonalFootPrintApp-1-0.0.1-SNAPSHOT.jar"]
