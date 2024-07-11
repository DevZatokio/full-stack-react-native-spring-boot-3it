package com.devzatokio.springboot_3it;

import com.devzatokio.springboot_3it.repository.SurveyRepository;
import com.devzatokio.springboot_3it.repository.MusicStyleRepository;
import com.devzatokio.springboot_3it.dto.MusicStyleCountDTO;
import com.devzatokio.springboot_3it.model.MusicStyle;
import com.devzatokio.springboot_3it.model.Survey;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.test.context.jdbc.Sql;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class SurveyRepositoryTest {

    @Autowired
    private SurveyRepository surveyRepository;

    @Autowired
    private MusicStyleRepository musicStyleRepository;

    private MusicStyle rockStyle;
    private Survey survey;

    @BeforeEach
    public void setUp() {
        rockStyle = new MusicStyle();
        rockStyle.setName("Rock");
        musicStyleRepository.save(rockStyle);

        survey = new Survey();
        survey.setEmail("test@example.com");
        survey.setMusicStyle(rockStyle);
        surveyRepository.save(survey);
    }

    @Test
    public void testExistsByEmail() {
        boolean exists = surveyRepository.existsByEmail("test@example.com");
        assertThat(exists).isTrue();
    }

    @Test
    public void testFindByEmail() {
        Survey foundSurvey = surveyRepository.findByEmail("test@example.com");
        assertThat(foundSurvey).isNotNull();
        assertThat(foundSurvey.getEmail()).isEqualTo("test@example.com");
        assertThat(foundSurvey.getMusicStyle().getName()).isEqualTo("Rock");
    }

    @Test
    public void testFindById() {
        Optional<Survey> foundSurvey = surveyRepository.findById(survey.getId());
        assertThat(foundSurvey).isPresent();
        assertThat(foundSurvey.get().getEmail()).isEqualTo("test@example.com");
    }

    @Test
    public void testFindAll() {
        List<Survey> surveys = surveyRepository.findAll();
        assertThat(surveys).isNotEmpty();
    }

    @Test
    public void testCountSurveyByMusicStyle() {
        List<MusicStyleCountDTO> counts = surveyRepository.countSurveyByMusicStyle();
        assertThat(counts).isNotEmpty();
        assertThat(counts.get(0).getMusicStyle()).isEqualTo("Rock");
        assertThat(counts.get(0).getCount()).isEqualTo(1);
    }
}
