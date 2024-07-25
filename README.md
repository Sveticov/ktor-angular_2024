package example.com.plugins

import example.com.model.MyTask
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

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

