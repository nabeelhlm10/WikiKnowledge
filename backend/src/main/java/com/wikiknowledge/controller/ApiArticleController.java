package com.wikiknowledge.controller;

import com.wikiknowledge.model.Article;
import com.wikiknowledge.service.ContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/articles")
public class ApiArticleController {
    private final ContentService contentService;

    public ApiArticleController(ContentService contentService) {
        this.contentService = contentService;
    }

    @GetMapping
    public List<Article> listArticles() {
        return contentService.getArticles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticle(@PathVariable String id) {
        return contentService.getArticle(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
