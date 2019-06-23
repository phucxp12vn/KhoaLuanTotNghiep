package com.thieu.setup.mappers;


import com.thieu.setup.models.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserMapper {
    User findByUserName(@Param("username") String username);

    int registerForUser(User user);

    String checkUser(@Param("username") String username);
}
