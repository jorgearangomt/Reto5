package com.example.reto3.repository;

import com.example.reto3.entities.Reservation;
import com.example.reto3.entities.Score;
import com.example.reto3.repository.crudRepository.ScoreCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ScoreRepository {
    @Autowired
    private ScoreCrudRepository scoreCrudRepository;
    public List<Score> getAll(){
        return (List<Score>) scoreCrudRepository.findAll();
    }
    public Score save(Score s){
        return scoreCrudRepository.save(s);
    }
    public Optional<Score> getById(int idScore){
        return scoreCrudRepository.findById(idScore);
    }
    public void delete(Score s){ scoreCrudRepository.delete(s); }
}