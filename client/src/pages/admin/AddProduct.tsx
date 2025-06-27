
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import AddProductForm from '@/components/admin/AddProductForm';

const AddProduct = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold font-['Playfair_Display'] text-primary">
            Add New Product
          </h1>
          <p className="text-muted-foreground">
            Add a new saree to your inventory
          </p>
        </div>

        <AddProductForm />
      </div>
    </AdminLayout>
  );
};

export default AddProduct;
