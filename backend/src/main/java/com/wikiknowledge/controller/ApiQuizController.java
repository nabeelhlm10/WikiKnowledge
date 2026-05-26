package com.wikiknowledge.controller;

import com.wikiknowledge.model.Quiz;
import com.wikiknowledge.service.ContentService;
import com.wikiknowledge.dto.QuizResult;
import com.wikiknowledge.dto.QuizSubmission;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
public class ApiQuizController {
    private final ContentService contentService;

    public ApiQuizController(ContentService contentService) {
        this.contentService = contentService;
    }

    @GetMapping
    public List<Quiz> listQuizzes() {
        return contentService.getQuizzes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getQuiz(@PathVariable String id) {
        return contentService.getQuiz(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/{id}/submit")
    public ResponseEntity<QuizResult> submitQuiz(@PathVariable String id,
            @RequestBody QuizSubmission submission, jakarta.servlet.http.HttpSession session) {
        Object user = session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(401).build();
        }
        return contentService.getQuiz(id)
                .map(quiz -> {
                    int score = 0;
                    var answers = submission.answers();
                    for (int i = 0; i < quiz.getQuestions().size(); i++) {
                        if (i < answers.size() && answers.get(i) != null) {
                            int selected = answers.get(i);
                            if (selected == quiz.getQuestions().get(i).getCorrectAnswerIndex()) {
                                score++;
                            }
                        }
                    }
                    int total = quiz.getQuestions().size();
                    return ResponseEntity.ok(new QuizResult(score, total, answers));
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
