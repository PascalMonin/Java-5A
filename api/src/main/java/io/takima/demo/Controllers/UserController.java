package io.takima.demo.Controllers;

import io.takima.demo.Entities.Room;
import io.takima.demo.Entities.User;
import io.takima.demo.DAO.UserDAO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserDAO userDAO;

    public UserController(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @GetMapping()
    public List<User> getUsers() {
        Iterable<User> it = this.userDAO.findAll();
        List<User> users = new ArrayList<>();
        it.forEach(e -> users.add(e));

        return users;
    }

    @GetMapping("/update/{id}")
    public Optional<User> getUserById(@PathVariable Long id)
    {
        return this.userDAO.findById(id);
    }

    @PostMapping()
    public User addUser(@RequestBody User user) {
        return this.userDAO.save(user);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        this.userDAO.deleteById(id);
    }

    @PostMapping("/update")
    public User updateUser(@RequestBody User user)
    {
        return this.userDAO.save(user);
    }
}
