package com.devzatokio.springboot_3it;

import com.devzatokio.springboot_3it.controller.MusicController;
import com.devzatokio.springboot_3it.model.MusicStyle;
import com.devzatokio.springboot_3it.repository.MusicStyleRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(MusicController.class)
public class MusicControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MusicStyleRepository musicStyleRepository;

    @Test
    public void getAllMusicStylesTest() throws Exception {
        MusicStyle musicStyle = new MusicStyle();
        musicStyle.setId(1L);
        musicStyle.setName("Rock");

        when(musicStyleRepository.findAll()).thenReturn(Arrays.asList(musicStyle));

        mockMvc.perform(MockMvcRequestBuilders.get("/music-style")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Rock"));
    }

    @Test
    public void getMusicStylesByParamTest() throws Exception {
        MusicStyle musicStyle = new MusicStyle();
        musicStyle.setId(1L);
        musicStyle.setName("Rock");

        when(musicStyleRepository.findByNameContainingIgnoreCase("Rock")).thenReturn(Arrays.asList(musicStyle));

        mockMvc.perform(MockMvcRequestBuilders.get("/music-style")
                .param("param", "Rock")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Rock"));
    }
}