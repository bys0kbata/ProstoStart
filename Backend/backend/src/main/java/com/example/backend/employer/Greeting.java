package com.example.backend.employer;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Greeting {
    public long id;
    public String name;
    public Greeting(long id, String name){
        setId(id);
        setName(name);
    }
}
