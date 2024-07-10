package com.devzatokio.springboot_3it.configs;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.devzatokio.springboot_3it.model.MusicStyle;
import com.devzatokio.springboot_3it.repository.MusicStyleRepository;

@Configuration
public class LoadDatabase {

    @Bean
    CommandLineRunner initDatabase(MusicStyleRepository repository) {
        return args -> {
            repository.save(new MusicStyle(1L, "Rock", "rock"));
            repository.save(new MusicStyle(2L, "Jazz", "jazz"));
            repository.save(new MusicStyle(3L, "Pop", "pop"));
            repository.save(new MusicStyle(4L, "Clásica", "classical"));
            repository.save(new MusicStyle(5L, "Hip Hop", "hip_hop"));
            repository.save(new MusicStyle(6L, "Reggae", "reggae"));
            repository.save(new MusicStyle(7L, "Blues", "blues"));
            repository.save(new MusicStyle(8L, "Country", "country"));
            repository.save(new MusicStyle(9L, "Electrónica", "electronic"));
            repository.save(new MusicStyle(10L, "Folk", "folk"));
            repository.save(new MusicStyle(11L, "Disco", "disco"));
            repository.save(new MusicStyle(12L, "Funk", "funk"));
            repository.save(new MusicStyle(13L, "Gospel", "gospel"));
            repository.save(new MusicStyle(14L, "Heavy Metal", "heavy_metal"));
            repository.save(new MusicStyle(15L, "House", "house"));
            repository.save(new MusicStyle(16L, "Indie", "indie"));
            repository.save(new MusicStyle(17L, "Latina", "latin"));
            repository.save(new MusicStyle(18L, "New Age", "new_age"));
            repository.save(new MusicStyle(19L, "Ópera", "opera"));
            repository.save(new MusicStyle(20L, "Punk", "punk"));
            repository.save(new MusicStyle(21L, "R&B", "rnb"));
            repository.save(new MusicStyle(22L, "Reguetón", "reggaeton"));
            repository.save(new MusicStyle(23L, "Salsa", "salsa"));
            repository.save(new MusicStyle(24L, "Samba", "samba"));
            repository.save(new MusicStyle(25L, "Soul", "soul"));
            repository.save(new MusicStyle(26L, "Techno", "techno"));
            repository.save(new MusicStyle(27L, "Trance", "trance"));
            repository.save(new MusicStyle(28L, "Trap", "trap"));
            repository.save(new MusicStyle(29L, "Música del Mundo", "world_music"));
            repository.save(new MusicStyle(30L, "K-Pop", "kpop"));
        };
    }
}
