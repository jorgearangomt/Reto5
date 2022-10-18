package com.example.reto3.repository;


import com.example.reto3.entities.Category;
import com.example.reto3.repository.crudRepository.CategoryCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CategoryRepository {

    @Autowired
    private CategoryCrudRepository categoryCrudRepository;

    //trae los objetos en la tabla
    public List<Category> getAll(){
        return (List<Category>) categoryCrudRepository.findAll();
    }
    public Optional<Category> getById(int id){
        return categoryCrudRepository.findById(id);
    }
    //guarda datos o los actualiza
    public Category save(Category c){
        return categoryCrudRepository.save(c);
    }
    //borra datos
    public void delete(Category c){
        categoryCrudRepository.delete(c);
    }
}
