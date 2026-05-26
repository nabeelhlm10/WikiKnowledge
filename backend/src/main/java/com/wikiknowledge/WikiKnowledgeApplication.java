package com.wikiknowledge;

import com.wikiknowledge.model.Article;
import com.wikiknowledge.model.Question;
import com.wikiknowledge.model.Quiz;
import com.wikiknowledge.repository.ArticleRepository;
import com.wikiknowledge.repository.QuizRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class WikiKnowledgeApplication {

        public static void main(String[] args) {
                SpringApplication.run(WikiKnowledgeApplication.class, args);
        }

        @Bean
        CommandLineRunner initData(ArticleRepository articleRepository, QuizRepository quizRepository) {
                return args -> {
                        if (articleRepository.count() == 0) {
                                articleRepository.save(new Article("Spring Boot Basics",
                                                "Spring Boot makes it easy to create Spring applications with auto-configuration and embedded servers."));
                                articleRepository.save(new Article("MongoDB Compass",
                                                "MongoDB Compass is a GUI for MongoDB that helps visualize collections, manage documents, and build queries."));
                                articleRepository.save(new Article("Thymeleaf Templates",
                                                "Thymeleaf is a server-side Java template engine for rendering web pages in Spring applications."));
                                articleRepository.save(new Article("Reactive JS Patterns",
                                                "Modern frontend apps use reactive patterns to sync UI state and server data efficiently."));
                                articleRepository.save(new Article("Accessibility Basics",
                                                "Creating accessible web content ensures users of all abilities can use your app."));
                                articleRepository.save(new Article("Design Systems",
                                                "Design systems help teams scale UI by reusing components and tokens."));
                        }

                        if (quizRepository.count() == 0) {
                                Quiz javaQuiz = new Quiz("Spring Boot Quiz", List.of(
                                                new Question("What does Spring Boot do?",
                                                                List.of("Creates standalone Spring apps",
                                                                                "Manages CSS styles",
                                                                                "Provides PostgreSQL support",
                                                                                "Replaces Java"),
                                                                0),
                                                new Question("Which annotation starts a Spring Boot application?",
                                                                List.of("@SpringBootApplication", "@Controller",
                                                                                "@Repository", "@Component"),
                                                                0)));

                                Quiz mongoQuiz = new Quiz("MongoDB Quiz", List.of(
                                                new Question("What type of database is MongoDB?",
                                                                List.of("Document", "Relational", "Graph", "Key-value"),
                                                                0),
                                                new Question("Which tool is used for GUI access to MongoDB?",
                                                                List.of("Compass", "Studio", "Workbench", "Explorer"),
                                                                0)));

                                quizRepository.save(javaQuiz);
                                quizRepository.save(mongoQuiz);
                                quizRepository.save(new Quiz("Web Fundamentals Quiz", List.of(
                                                new Question("What does HTML stand for?",
                                                                List.of("HyperText Markup Language",
                                                                                "Home Tool Markup Language",
                                                                                "Hyperlinks and Text Markup",
                                                                                "Hyper Trainer Markup Language"),
                                                                0),
                                                new Question("Which CSS property controls layout?",
                                                                List.of("display", "color", "font-size", "border"),
                                                                0))));
                                quizRepository.save(new Quiz("UX Basics Quiz", List.of(
                                                new Question("What is a design system?",
                                                                List.of("A collection of reusable components",
                                                                                "A CSS file", "A backend API",
                                                                                "A database"),
                                                                0),
                                                new Question("What does WCAG stand for?",
                                                                List.of("Web Content Accessibility Guidelines",
                                                                                "Web Component Accessibility Guide",
                                                                                "World Content Accessibility Guidelines",
                                                                                "Web Content and Accessibility Guide"),
                                                                0))));
                        }
                };
        }
}
