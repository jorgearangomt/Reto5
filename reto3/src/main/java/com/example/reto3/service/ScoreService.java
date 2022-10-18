package com.example.reto3.service;

import com.example.reto3.entities.Score;
import com.example.reto3.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScoreService {
    @Autowired
    private ScoreRepository scoreRepository;
    public List<Score> getAll(){
        return scoreRepository.getAll();
    }
    public Optional<Score>getById(int idScore) {
        return scoreRepository.getById(idScore);
    }
    public Score save(Score s){
        if(s.getIdScore()== null){
            return scoreRepository.save(s);
        }
        else{
            Optional<Score> st= scoreRepository.getById(s.getIdScore());
            if(!st.isPresent()){
                return scoreRepository.save(s);
            }
            else{
                return s;
            }
        }
    }
    public Score update(Score s){
        if(s.getIdScore()!= null){
            Optional<Score> st= scoreRepository.getById(s.getIdScore());
            if(st.isPresent()){
                Score temp= st.get();
                if(s.getScore()!= null){
                    temp.setScore(s.getScore());
                }
                return scoreRepository.save(temp);
            }
        }
        return s;
    }
    public boolean delete(int idScore){
        Optional<Score> s= scoreRepository.getById(idScore);
        if (s.isPresent()){
            scoreRepository.delete(s.get());
            return true;
        }else{
            return false;
        }
    }
}
