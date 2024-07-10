package com.devzatokio.springboot_3it.repository;

import com.devzatokio.springboot_3it.model.MusicStyle;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MusicStyleRepository extends JpaRepository<MusicStyle, Long> {

  Optional<MusicStyle> findByName(String name);

  List<MusicStyle> findAll();

  List<MusicStyle> findByNameContainingIgnoreCase(String name);
}
