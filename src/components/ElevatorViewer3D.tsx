import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Loader } from '@react-three/drei';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, RotateCcw, ZoomIn, ZoomOut, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ElevatorCabin3D from './ElevatorCabin3D';
import { toast } from 'sonner';

interface ElevatorViewer3DProps {
  isOpen: boolean;
  onClose: () => void;
}

const ElevatorViewer3D: React.FC<ElevatorViewer3DProps> = ({ isOpen, onClose }) => {
  const [doorsOpen, setDoorsOpen] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const handleInteraction = (type: string, data?: any) => {
    switch (type) {
      case 'control-panel':
        toast.success('IoT Control Panel - Smart elevator controls with AI integration');
        setActiveFeature('IoT Control Panel');
        break;
      case 'floor':
        toast.success('Anti-Slip Smart Flooring - Premium materials with safety sensors');
        setActiveFeature('Smart Flooring');
        break;
      case 'safety-system':
        toast.success('Emergency Brake System - Advanced safety with multiple fail-safes');
        setActiveFeature('Safety System');
        break;
      case 'floor-button':
        toast.info(`Floor ${data.floor} button pressed`);
        break;
      default:
        break;
    }
  };

  const resetView = () => {
    // Reset camera position would require camera ref
    toast.info('View reset to default position');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[80vh] p-0 bg-slate-900 border-slate-700">
        <div className="relative w-full h-full">
          {/* Header Controls */}
          <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDoorsOpen(!doorsOpen)}
                className="bg-black/50 border-white/20 text-white hover:bg-white/10"
              >
                {doorsOpen ? 'Close Doors' : 'Open Doors'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetView}
                className="bg-black/50 border-white/20 text-white hover:bg-white/10"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowInfo(!showInfo)}
                className="bg-black/50 border-white/20 text-white hover:bg-white/10"
              >
                <Info className="w-4 h-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="bg-black/50 border-white/20 text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Info Panel */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                className="absolute left-4 top-20 z-20 bg-black/80 backdrop-blur-sm rounded-lg p-4 w-80 text-white"
              >
                <h3 className="text-lg font-semibold mb-3">Elevator Features</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-2 rounded bg-blue-500/20 border border-blue-500/30">
                    <div className="font-medium">🔧 IoT Control Panel</div>
                    <div className="text-xs text-gray-300 mt-1">
                      Smart controls with AI integration and remote monitoring
                    </div>
                  </div>
                  <div className="p-2 rounded bg-green-500/20 border border-green-500/30">
                    <div className="font-medium">🏢 Smart Flooring</div>
                    <div className="text-xs text-gray-300 mt-1">
                      Anti-slip materials with integrated safety sensors
                    </div>
                  </div>
                  <div className="p-2 rounded bg-red-500/20 border border-red-500/30">
                    <div className="font-medium">⚡ Safety System</div>
                    <div className="text-xs text-gray-300 mt-1">
                      Multiple emergency brakes and fail-safe mechanisms
                    </div>
                  </div>
                </div>
                {activeFeature && (
                  <div className="mt-3 p-2 bg-yellow-500/20 border border-yellow-500/30 rounded">
                    <div className="text-xs font-medium">Currently Viewing:</div>
                    <div className="text-sm">{activeFeature}</div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Instructions */}
          <div className="absolute bottom-4 left-4 z-20 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
            <div className="font-medium mb-1">Controls:</div>
            <div className="text-xs space-y-1 text-gray-300">
              <div>• Click + Drag: Rotate view</div>
              <div>• Scroll: Zoom in/out</div>
              <div>• Click features: View details</div>
              <div>• Hover: Show tooltips</div>
            </div>
          </div>

          {/* 3D Scene */}
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 60 }}
              gl={{ antialias: true, alpha: true }}
            >
              <Suspense fallback={null}>
                <Environment preset="city" />
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <pointLight position={[-5, 5, 5]} intensity={0.8} color="#3b82f6" />
                
                <ElevatorCabin3D 
                  doorsOpen={doorsOpen} 
                  onInteraction={handleInteraction}
                  enableInteraction={true}
                  isFullscreen={true}
                />
                
                <OrbitControls 
                  enablePan={true}
                  enableZoom={true}
                  maxPolarAngle={Math.PI / 1.5}
                  minPolarAngle={Math.PI / 4}
                  autoRotate={false}
                  autoRotateSpeed={0}
                />
              </Suspense>
            </Canvas>
            <Loader />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ElevatorViewer3D;