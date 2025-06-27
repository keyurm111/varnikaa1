
import React, { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus, Edit, Trash2, FolderOpen } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminCategories = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    image: ''
  });

  // Mock categories data
  const categories = [
    {
      id: '1',
      name: 'Banarasi',
      description: 'Traditional silk sarees with intricate gold patterns from Varanasi',
      productCount: 25,
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=200'
    },
    {
      id: '2',
      name: 'Kanjeevaram',
      description: 'South Indian silk sarees with rich borders and traditional motifs',
      productCount: 18,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200'
    },
    {
      id: '3',
      name: 'Cotton',
      description: 'Comfortable and breathable cotton sarees for daily wear',
      productCount: 32,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200'
    },
    {
      id: '4',
      name: 'Silk',
      description: 'Premium silk sarees for special occasions and festivities',
      productCount: 28,
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=200'
    },
    {
      id: '5',
      name: 'Partywear',
      description: 'Elegant and stylish sarees perfect for parties and celebrations',
      productCount: 15,
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=200'
    },
    {
      id: '6',
      name: 'Bridal',
      description: 'Luxurious bridal sarees for your special day',
      productCount: 12,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200'
    }
  ];

  const handleAddCategory = () => {
    if (!newCategory.name || !newCategory.description) {
      toast({
        title: "Please fill required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Category added successfully!",
      description: `${newCategory.name} category has been created.`
    });

    setNewCategory({
      name: '',
      description: '',
      image: ''
    });
    setIsAddDialogOpen(false);
  };

  const handleDeleteCategory = (categoryId: string, categoryName: string) => {
    toast({
      title: "Category deleted",
      description: `${categoryName} category has been removed.`
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-['Playfair_Display'] text-primary">
              Categories
            </h1>
            <p className="text-muted-foreground">
              Manage product categories
            </p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Category Name *</Label>
                  <Input
                    id="name"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                    placeholder="Enter category name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={newCategory.description}
                    onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                    placeholder="Enter category description"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    value={newCategory.image}
                    onChange={(e) => setNewCategory({...newCategory, image: e.target.value})}
                    placeholder="Enter image URL"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 mt-6">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddCategory} className="btn-primary">
                  Add Category
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-2">
                    <Button variant="secondary" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => handleDeleteCategory(category.id, category.name)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <FolderOpen className="h-4 w-4 mr-1" />
                    {category.productCount} products
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Products:</span>
                    <span className="font-medium">{category.productCount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Category Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{categories.length}</p>
                <p className="text-sm text-muted-foreground">Total Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  {categories.reduce((sum, cat) => sum + cat.productCount, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Products</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  {Math.round(categories.reduce((sum, cat) => sum + cat.productCount, 0) / categories.length)}
                </p>
                <p className="text-sm text-muted-foreground">Avg Products/Category</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  {categories.find(cat => cat.productCount === Math.max(...categories.map(c => c.productCount)))?.name}
                </p>
                <p className="text-sm text-muted-foreground">Top Category</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminCategories;
