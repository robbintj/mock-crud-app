package com.sistema.mks.config;

import com.sistema.mks.model.User;
import com.sistema.mks.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository) {
        return args -> {
            if (userRepository.findByUsername("admin").isEmpty()) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("123"));
                userRepository.save(admin);
            }

            if (userRepository.findByUsername("operador").isEmpty()) {
                User operador = new User();
                operador.setUsername("operador");
                operador.setPassword(passwordEncoder.encode("456"));
                userRepository.save(operador);
            }
        };
    }
}
