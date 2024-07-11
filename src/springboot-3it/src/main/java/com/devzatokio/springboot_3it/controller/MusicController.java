package com.devzatokio.springboot_3it.controller;

import java.util.List;
import java.util.Optional;

import com.devzatokio.springboot_3it.model.MusicStyle;
import com.devzatokio.springboot_3it.repository.MusicStyleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MusicController {

  @Autowired
  private MusicStyleRepository musicStyleRepository;

  @GetMapping("/music-style")
  public List<MusicStyle> getMusicStyles(@RequestParam Optional<String> param) {
    if (param.isPresent()) {
      // Assuming param is a substring of the style name
      return musicStyleRepository.findByNameContainingIgnoreCase(param.get());
    } else {
      return musicStyleRepository.findAll();
    }
  }
}
