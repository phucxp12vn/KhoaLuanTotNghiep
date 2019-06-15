package com.thieu.tool.models;

import java.util.Date;

public class CategoryDetails {

    private int cateDetailsId;

    private String cateDetailsType;

    private String cateDetailsDescription;

    private boolean isActive;

    private Date createDate;

    public CategoryDetails() {
    }

    public int getCateDetailsId() {
        return cateDetailsId;
    }

    public void setCateDetailsId(int cateDetailsId) {
        this.cateDetailsId = cateDetailsId;
    }

    public String getCateDetailsType() {
        return cateDetailsType;
    }

    public void setCateDetailsType(String cateDetailsType) {
        this.cateDetailsType = cateDetailsType;
    }

    public String getCateDetailsDescription() {
        return cateDetailsDescription;
    }

    public void setCateDetailsDescription(String cateDetailsDescription) {
        this.cateDetailsDescription = cateDetailsDescription;
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
}
