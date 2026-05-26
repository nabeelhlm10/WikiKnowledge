package com.wikiknowledge.controller;

import com.wikiknowledge.service.ContentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    private final ContentService contentService;

    public HomeController(ContentService contentService) {
        this.contentService = contentService;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("articles", contentService.getArticles());
        model.addAttribute("quizzes", contentService.getQuizzes());
        return "index";
    }
}
