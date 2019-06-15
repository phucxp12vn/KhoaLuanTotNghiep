package com.thieu.tool.models;

public class CategorySettingModel {

    private int cateSettingId;

    private String cateSettingName;

    private String cateSettingType;

    private String description;

    private boolean isActive;

    private String cateSettingValue;

    public CategorySettingModel() {
    }

    public CategorySettingModel(String cateSettingName, String cateSettingType, boolean isActive) {
        this.cateSettingName = cateSettingName;
        this.cateSettingType = cateSettingType;
        this.isActive = isActive;
    }

    public int getCateSettingId() {
        return cateSettingId;
    }

    public void setCateSettingId(int cateSettingId) {
        this.cateSettingId = cateSettingId;
    }

    public String getCateSettingName() {
        return cateSettingName;
    }

    public void setCateSettingName(String cateSettingName) {
        this.cateSettingName = cateSettingName;
    }

    public String getCateSettingType() {
        return cateSettingType;
    }

    public void setCateSettingType(String cateSettingType) {
        this.cateSettingType = cateSettingType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getCateSettingValue() {
        return cateSettingValue;
    }

    public void setCateSettingValue(String cateSettingValue) {
        this.cateSettingValue = cateSettingValue;
    }
}
