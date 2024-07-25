
fun Application.configureSerialization() {
    install(ContentNegotiation) {
        json()
    }
    // implementation("io.ktor:ktor-server-cors")
    install(CORS){
        allowHost("localhost:61180")//http://localhost:61180
        allowHeader(HttpHeaders.ContentType)
    }
    routing {
        get("/json/kotlinx-serialization") {
            call.respond(mapOf("hello" to "world"))
        }
        get("/mytask") {
            val task = MyTask("first", "some text")
            call.respond(task)
        }
    }
}

##Dockerfile##

FROM openjdk:17-oracle
EXPOSE 8080:8080
RUN mkdir /app
COPY ./build/libs/*-all.jar /app/ktor-angular.jar
ENTRYPOINT ["java","-jar","/app/ktor-angular.jar"]

