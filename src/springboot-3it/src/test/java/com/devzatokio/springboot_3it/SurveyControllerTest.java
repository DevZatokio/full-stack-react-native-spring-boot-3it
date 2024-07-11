package com.devzatokio.springboot_3it;

import com.devzatokio.springboot_3it.controller.SurveyController;
import com.devzatokio.springboot_3it.dto.MusicStyleCountDTO;
import com.devzatokio.springboot_3it.model.MusicStyle;
import com.devzatokio.springboot_3it.model.Survey;
import com.devzatokio.springboot_3it.service.SurveyService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(SurveyController.class)
public class SurveyControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SurveyService surveyService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void saveSurveyTest() throws Exception {
        MusicStyle musicStyle = new MusicStyle();
        musicStyle.setId(1L);
        musicStyle.setName("Rock");

        Survey survey = new Survey();
        survey.setId(1L);
        survey.setEmail("test@example.com");
        survey.setMusicStyle(musicStyle);

        Survey createdSurvey = new Survey();
        createdSurvey.setId(1L);
        createdSurvey.setEmail("test@example.com");
        createdSurvey.setMusicStyle(musicStyle);

        when(surveyService.createUser("test@example.com", 1L)).thenReturn(createdSurvey);

        String surveyJson = objectMapper.writeValueAsString(survey);

        mockMvc.perform(MockMvcRequestBuilders.post("/survey")
                .contentType(MediaType.APPLICATION_JSON)
                .content(surveyJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("test@example.com"))
                .andExpect(jsonPath("$.musicStyle.name").value("Rock"));
    }

    @Test
    public void countUsersByMusicStyleTest() throws Exception {
        MusicStyleCountDTO dto = new MusicStyleCountDTO();
        dto.setMusicStyle("Rock");
        dto.setCount(10);

        List<MusicStyleCountDTO> dtoList = Arrays.asList(dto);

        when(surveyService.countUsersByMusicStyle()).thenReturn(dtoList);

        mockMvc.perform(MockMvcRequestBuilders.get("/survey-count-by-music-style")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].musicStyle").value("Rock"))
                .andExpect(jsonPath("$[0].count").value(10));
    }
}