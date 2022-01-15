package com.meuapp.DSMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.meuapp.DSMovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

	
}
