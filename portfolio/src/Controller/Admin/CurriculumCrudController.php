<?php

namespace App\Controller\Admin;

use App\Entity\Curriculum;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class CurriculumCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Curriculum::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('imageFile')->setFormType(VichImageType::class)->onlyOnForms(),
            TextField::new('name'),
            // TextField::new('fichier'),
            ImageField::new('fichier')->setBasePath('/files')->onlyOnIndex(),
        ];
    }
}
