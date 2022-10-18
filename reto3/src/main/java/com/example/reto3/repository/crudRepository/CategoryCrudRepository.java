package com.example.reto3.repository.crudRepository;


import com.example.reto3.entities.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.Locale;

public interface CategoryCrudRepository extends CrudRepository<Category,Integer> {
}
