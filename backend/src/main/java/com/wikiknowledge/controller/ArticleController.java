package com.wikiknowledge.controller;

import com.wikiknowledge.service.ContentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class ArticleController {
    private final ContentService contentService;

    public ArticleController(ContentService contentService) {
        this.contentService = contentService;
    }

    @GetMapping("/articles")
    public RedirectView articles(Model model) {
        return new RedirectView("/");
    }

    @GetMapping("/articles/{id}")
    public RedirectView articleDetails(@PathVariable String id, Model model) {
        return new RedirectView("/");
    }
}
