package com.devzatokio.springboot_3it.service;

import com.devzatokio.springboot_3it.dto.MusicStyleCountDTO;
import com.devzatokio.springboot_3it.model.MusicStyle;
import com.devzatokio.springboot_3it.repository.MusicStyleRepository;
import com.devzatokio.springboot_3it.model.Survey;
import com.devzatokio.springboot_3it.repository.SurveyRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveyService {
    @Autowired
    private SurveyRepository surveyRepository;
    @Autowired
    private MusicStyleRepository musicStyleRepository;

    public Survey createUser(String email, Long styleId) {
        if (surveyRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already exists");
        }

        Optional<MusicStyle> musicStyle = musicStyleRepository.findById(styleId);
        if (!musicStyle.isPresent()) {
            throw new RuntimeException("Music style not found");
        }

        Survey survey = new Survey();
        survey.setEmail(email);
        survey.setMusicStyle(musicStyle.get());
        return surveyRepository.save(survey);
    }

    public List<MusicStyle> getAllMusicStyles() {
        return musicStyleRepository.findAll();
    }

    public List<MusicStyleCountDTO> countUsersByMusicStyle() {
        return surveyRepository.countSurveyByMusicStyle();
    }
}