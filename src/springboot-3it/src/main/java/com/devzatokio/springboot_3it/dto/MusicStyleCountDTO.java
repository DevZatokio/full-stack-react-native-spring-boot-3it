package com.devzatokio.springboot_3it.dto;

public class MusicStyleCountDTO {
  private String musicStyle;
  private long count;

  public MusicStyleCountDTO() {}

  public MusicStyleCountDTO(String musicStyle, long count) {
      this.musicStyle = musicStyle;
      this.count = count;
  }

  // Getters y Setters

  public String getMusicStyle() {
      return musicStyle;
  }

  public void setMusicStyle(String musicStyle) {
      this.musicStyle = musicStyle;
  }

  public long getCount() {
      return count;
  }

  public void setCount(long count) {
      this.count = count;
  }
}