package com.apcoelhodev.delivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apcoelhodev.delivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
