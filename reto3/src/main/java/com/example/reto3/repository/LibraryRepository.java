package com.example.reto3.repository;

import com.example.reto3.entities.Library;
import com.example.reto3.repository.crudRepository.LibraryCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class LibraryRepository {

    @Autowired
    private LibraryCrudRepository libraryCrudRepository;

    //trae los objetos en la tabla
    public List<Library> getAll(){
        return (List<Library>) libraryCrudRepository.findAll();
    }
    public Optional<Library> getById(int id){
        return libraryCrudRepository.findById(id);
    }
    //guarda datos o los actualiza
    public Library save(Library c){
        return libraryCrudRepository.save(c);
    }
    //borra datos
    public void delete(Library c){
        libraryCrudRepository.delete(c);
    }
}
