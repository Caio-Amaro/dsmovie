package com.meuapp.DSMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.meuapp.DSMovie.entities.Score;
import com.meuapp.DSMovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
	
	
}
