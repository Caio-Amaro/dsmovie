package com.meuapp.DSMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.meuapp.DSMovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
