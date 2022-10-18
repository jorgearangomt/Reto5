package com.example.reto3.service;

import com.example.reto3.entities.Category;
import com.example.reto3.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    public List<Category> getAll(){
        return categoryRepository.getAll();
    }
    public Optional<Category>getById(int id) {
        return categoryRepository.getById(id);
    }
    public Category save(Category c){
        if(c.getId()==null){
            return categoryRepository.save(c);
        }else {
            Optional<Category> e = categoryRepository.getById(c.getId());
            if (e.isPresent()){
                return c;
            }else {
                return categoryRepository.save(c);
            }
        }
    }
    public Category update(Category c){
        if(c.getId()!=null){
            Optional<Category> q = categoryRepository.getById(c.getId());
            if (q.isPresent()){
                if(c.getName()!=null){
                    q.get().setName(c.getName());
                }
                if(c.getDescription()!=null){
                    q.get().setDescription(c.getDescription());
                }
                categoryRepository.save(q.get());
                return q.get();
            }else{
                return c;
            }
        }else{
            return  c;
        }
    }
    public boolean delete(int id){
        Optional<Category> c= categoryRepository.getById(id);
        if (c.isPresent()){
            categoryRepository.delete(c.get());
            return true;
        }else{
            return false;
        }
    }
}
