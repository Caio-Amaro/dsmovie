package com.meuapp.DSMovie.controllers;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meuapp.DSMovie.DTO.MovieDTO;
import com.meuapp.DSMovie.DTO.ScoreDTO;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	

	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO dto){
		
		return null;
		
	}

}
