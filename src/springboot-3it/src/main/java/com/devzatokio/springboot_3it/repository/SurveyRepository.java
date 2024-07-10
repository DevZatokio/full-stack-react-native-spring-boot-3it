package com.devzatokio.springboot_3it.repository;

import java.util.List;
import java.util.Optional;

import com.devzatokio.springboot_3it.dto.MusicStyleCountDTO;
import com.devzatokio.springboot_3it.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SurveyRepository extends JpaRepository<Survey, Long> {
    boolean existsByEmail(String email);

    Survey findByEmail(String email);

    Optional<Survey> findById(Long id);

    List<Survey> findAll();

    @Query("SELECT new com.devzatokio.springboot_3it.dto.MusicStyleCountDTO(ms.name, COUNT(u)) " +
            "FROM Survey u JOIN u.musicStyle ms " +
            "GROUP BY ms.id")
    List<MusicStyleCountDTO> countSurveyByMusicStyle();
}
