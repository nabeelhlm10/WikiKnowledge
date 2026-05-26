package com.wikiknowledge.dto;

import java.util.List;

public record QuizResult(int score, int total, List<Integer> answers) {
}
