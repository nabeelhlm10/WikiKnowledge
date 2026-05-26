package com.wikiknowledge.controller;

import com.wikiknowledge.model.Question;
import com.wikiknowledge.model.Quiz;
import com.wikiknowledge.service.ContentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Map;

@Controller
public class QuizController {
    private final ContentService contentService;

    public QuizController(ContentService contentService) {
        this.contentService = contentService;
    }

    @GetMapping("/quizzes")
    public RedirectView quizzes(Model model) {
        return new RedirectView("/");
    }

    @GetMapping("/quizzes/{id}")
    public RedirectView quizDetails(@PathVariable String id, Model model) {
        return new RedirectView("/");
    }

    @PostMapping("/quizzes/{id}/submit")
    public RedirectView submitQuiz(@PathVariable String id, @RequestParam Map<String, String> answers, Model model) {
        return new RedirectView("/");
    }
}
