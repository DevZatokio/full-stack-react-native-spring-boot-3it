package com.devzatokio.springboot_3it.controller;

import com.devzatokio.springboot_3it.dto.MusicStyleCountDTO;
import com.devzatokio.springboot_3it.model.Survey;
import com.devzatokio.springboot_3it.service.SurveyService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RequestMapping("/api")
public class SurveyController {

    @Autowired
    private SurveyService surveyService;


    @PostMapping("/survey")
    public Survey saveSurvey(@RequestBody Survey survey) {
       return surveyService.createUser(survey.getEmail(), survey.getMusicStyle().getId());
    }

    @GetMapping("/survey-count-by-music-style")
    public List<MusicStyleCountDTO> countUsersByMusicStyle() {
        return surveyService.countUsersByMusicStyle();
    }
}
