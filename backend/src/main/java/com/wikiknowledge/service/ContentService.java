package com.wikiknowledge.service;

import com.wikiknowledge.model.Article;
import com.wikiknowledge.model.Quiz;
import com.wikiknowledge.repository.ArticleRepository;
import com.wikiknowledge.repository.QuizRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContentService {
    private final ArticleRepository articleRepository;
    private final QuizRepository quizRepository;

    public ContentService(ArticleRepository articleRepository, QuizRepository quizRepository) {
        this.articleRepository = articleRepository;
        this.quizRepository = quizRepository;
    }

    public List<Article> getArticles() {
        return articleRepository.findAll();
    }

    public Optional<Article> getArticle(String id) {
        return articleRepository.findById(id);
    }

    public List<Quiz> getQuizzes() {
        return quizRepository.findAll();
    }

    public Optional<Quiz> getQuiz(String id) {
        return quizRepository.findById(id);
    }
}
