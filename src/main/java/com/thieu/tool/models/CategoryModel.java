package com.thieu.tool.models;

import com.mysql.cj.jdbc.Blob;

import java.util.Date;

public class CategoryModel {
    private int categoryId;

    private String categoryName;

    private String categoryDescription;

    private String categoryCode;

    private Blob categoryImage;

    private String categoryType;

    private boolean isActive;

    private Date createDate;

    private String createBy;

    public CategoryModel() {
    }

    public CategoryModel(String categoryName, String categoryDescription, String categoryCode, boolean isActive, Date createDate) {
        this.categoryName = categoryName;
        this.categoryDescription = categoryDescription;
        this.categoryCode = categoryCode;
        this.isActive = isActive;
        this.createDate = createDate;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getCategoryDescription() {
        return categoryDescription;
    }

    public void setCategoryDescription(String categoryDescription) {
        this.categoryDescription = categoryDescription;
    }

    public String getCategoryCode() {
        return categoryCode;
    }

    public void setCategoryCode(String categoryCode) {
        this.categoryCode = categoryCode;
    }

    public Blob getCategoryImage() {
        return categoryImage;
    }

    public void setCategoryImage(Blob categoryImage) {
        this.categoryImage = categoryImage;
    }

    public String getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(String categoryType) {
        this.categoryType = categoryType;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }
}
