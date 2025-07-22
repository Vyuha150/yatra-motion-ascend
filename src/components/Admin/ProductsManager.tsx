import React, { useState, useEffect } from 'react';
import { productService, Product } from '@/services/productService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Plus, Edit, Trash2, Loader2 } from 'lucide-react';

const ProductsManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'home_elevators' as Product['category'],
    specifications: {
      capacity: '',
      speed: '',
      floors: '',
      dimensions: {
        width: '',
        depth: '',
        height: ''
      }
    },
    features: [] as string[],
    pricing: {
      basePrice: 0,
      installationPrice: 0,
      currency: 'INR',
      isQuoteRequired: false
    },
    images: [{
      url: '',
      alt: '',
      isPrimary: true
    }],
    certifications: [] as Array<{
      name: string;
      issuedBy: string;
      validUntil?: string;
    }>,
    availability: {
      isAvailable: true,
      leadTime: ''
    },
    isActive: true
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productService.getProducts();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Error fetching products');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const productData = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        specifications: formData.specifications,
        features: formData.features,
        pricing: formData.pricing,
        images: formData.images,
        certifications: formData.certifications,
        availability: formData.availability,
        isActive: formData.isActive
      };

      if (editingProduct) {
        await productService.updateProduct(editingProduct._id, productData);
        toast.success('Product updated successfully');
      } else {
        await productService.createProduct(productData);
        toast.success('Product created successfully');
      }
      
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error('Error saving product');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      category: product.category,
      specifications: product.specifications,
      features: product.features || [],
      pricing: product.pricing,
      images: product.images || [{
        url: '',
        alt: '',
        isPrimary: true
      }],
      certifications: product.certifications || [],
      availability: product.availability,
      isActive: product.isActive
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await productService.deleteProduct(id);
        toast.success('Product deleted successfully');
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
        toast.error('Error deleting product');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      category: 'home_elevators',
      specifications: {
        capacity: '',
        speed: '',
        floors: '',
        dimensions: {
          width: '',
          depth: '',
          height: ''
        }
      },
      features: [],
      pricing: {
        basePrice: 0,
        installationPrice: 0,
        currency: 'INR',
        isQuoteRequired: false
      },
      images: [{
        url: '',
        alt: '',
        isPrimary: true
      }],
      certifications: [],
      availability: {
        isAvailable: true,
        leadTime: ''
      },
      isActive: true
    });
    setEditingProduct(null);
    setIsDialogOpen(false);
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="flex justify-center items-center p-12">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <div className="absolute inset-0 h-8 w-8 border-2 border-blue-200 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <span className="text-lg font-medium text-gray-800">Loading Products...</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Products Management</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => resetForm()}>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select
                    value={formData.category}
                    onValueChange={(value: Product['category']) => setFormData({...formData, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home_elevators">Home Elevators</SelectItem>
                      <SelectItem value="passenger_elevators">Passenger Elevators</SelectItem>
                      <SelectItem value="freight_elevators">Freight Elevators</SelectItem>
                      <SelectItem value="modernization">Modernization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium">Specifications</label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-gray-600">Capacity</label>
                    <Input
                      value={formData.specifications.capacity}
                      onChange={(e) => setFormData({
                        ...formData, 
                        specifications: { ...formData.specifications, capacity: e.target.value }
                      })}
                      placeholder="8-10 persons"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Speed</label>
                    <Input
                      value={formData.specifications.speed}
                      onChange={(e) => setFormData({
                        ...formData, 
                        specifications: { ...formData.specifications, speed: e.target.value }
                      })}
                      placeholder="1.5 m/s"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Floors</label>
                    <Input
                      value={formData.specifications.floors}
                      onChange={(e) => setFormData({
                        ...formData, 
                        specifications: { ...formData.specifications, floors: e.target.value }
                      })}
                      placeholder="2-6 floors"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Pricing</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-600">Base Price (₹)</label>
                    <Input
                      type="number"
                      value={formData.pricing.basePrice}
                      onChange={(e) => setFormData({
                        ...formData, 
                        pricing: { ...formData.pricing, basePrice: parseFloat(e.target.value) || 0 }
                      })}
                      placeholder="500000"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Installation Price (₹)</label>
                    <Input
                      type="number"
                      value={formData.pricing.installationPrice}
                      onChange={(e) => setFormData({
                        ...formData, 
                        pricing: { ...formData.pricing, installationPrice: parseFloat(e.target.value) || 0 }
                      })}
                      placeholder="50000"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Primary Image URL</label>
                <Input
                  value={formData.images[0]?.url || ''}
                  onChange={(e) => setFormData({
                    ...formData, 
                    images: [{ url: e.target.value, alt: formData.name, isPrimary: true }]
                  })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Lead Time</label>
                <Input
                  value={formData.availability.leadTime}
                  onChange={(e) => setFormData({
                    ...formData, 
                    availability: { ...formData.availability, leadTime: e.target.value }
                  })}
                  placeholder="4-6 weeks"
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={resetForm} disabled={submitting}>
                  Cancel
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <div className="absolute inset-0 h-4 w-4 border border-white/30 rounded-full animate-pulse"></div>
                      </div>
                      <span>{editingProduct ? 'Updating...' : 'Creating...'}</span>
                    </div>
                  ) : (
                    <>{editingProduct ? 'Update' : 'Create'} Product</>
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Base Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-12">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
                        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
                      </div>
                      <div className="space-y-2 text-center">
                        <h3 className="text-lg font-medium text-gray-800">No Products Found</h3>
                        <p className="text-gray-500">Add your first product to get started.</p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                products.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {product.category.replace('_', ' ').split(' ').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>₹{product.pricing?.basePrice?.toLocaleString() || 0}</TableCell>
                    <TableCell>
                      <Badge variant={product.isActive ? "default" : "secondary"}>
                        {product.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(product)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(product._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductsManager;
