export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      animals: {
        Row: {
          age: number
          children_count: number | null
          created_at: string | null
          id: string
          image_url: string | null
          last_scanned_at: string | null
          name: string
          notes: string | null
          plan: string | null
          scan_count: number | null
          type: string
          user_id: string | null
        }
        Insert: {
          age: number
          children_count?: number | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          last_scanned_at?: string | null
          name: string
          notes?: string | null
          plan?: string | null
          scan_count?: number | null
          type: string
          user_id?: string | null
        }
        Update: {
          age?: number
          children_count?: number | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          last_scanned_at?: string | null
          name?: string
          notes?: string | null
          plan?: string | null
          scan_count?: number | null
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      lost_found_posts: {
        Row: {
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          description: string
          id: string
          image_url: string | null
          last_seen_date: string | null
          last_seen_location: string | null
          pet_age: number | null
          pet_breed: string | null
          pet_color: string | null
          pet_gender: string | null
          pet_id: string | null
          pet_name: string | null
          pet_type: string | null
          resolved_at: string | null
          status: string
          title: string
          user_id: string
        }
        Insert: {
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description: string
          id?: string
          image_url?: string | null
          last_seen_date?: string | null
          last_seen_location?: string | null
          pet_age?: number | null
          pet_breed?: string | null
          pet_color?: string | null
          pet_gender?: string | null
          pet_id?: string | null
          pet_name?: string | null
          pet_type?: string | null
          resolved_at?: string | null
          status: string
          title: string
          user_id: string
        }
        Update: {
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string
          id?: string
          image_url?: string | null
          last_seen_date?: string | null
          last_seen_location?: string | null
          pet_age?: number | null
          pet_breed?: string | null
          pet_color?: string | null
          pet_gender?: string | null
          pet_id?: string | null
          pet_name?: string | null
          pet_type?: string | null
          resolved_at?: string | null
          status?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lost_found_posts_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lost_found_posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      pets: {
        Row: {
          birthday: string | null
          breed: string | null
          color: string | null
          created_at: string | null
          emergency_contact: Json | null
          gender: string | null
          id: string
          is_active: boolean | null
          medical_info: Json | null
          microchip_id: string | null
          name: string
          notes: string | null
          owner_id: string
          profile_image_url: string | null
          qr_code_url: string | null
          type: string
          veterinarian: Json | null
          weight_kg: number | null
        }
        Insert: {
          birthday?: string | null
          breed?: string | null
          color?: string | null
          created_at?: string | null
          emergency_contact?: Json | null
          gender?: string | null
          id?: string
          is_active?: boolean | null
          medical_info?: Json | null
          microchip_id?: string | null
          name: string
          notes?: string | null
          owner_id: string
          profile_image_url?: string | null
          qr_code_url?: string | null
          type: string
          veterinarian?: Json | null
          weight_kg?: number | null
        }
        Update: {
          birthday?: string | null
          breed?: string | null
          color?: string | null
          created_at?: string | null
          emergency_contact?: Json | null
          gender?: string | null
          id?: string
          is_active?: boolean | null
          medical_info?: Json | null
          microchip_id?: string | null
          name?: string
          notes?: string | null
          owner_id?: string
          profile_image_url?: string | null
          qr_code_url?: string | null
          type?: string
          veterinarian?: Json | null
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pets_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          email: string | null
          full_name: string | null
          id: string
          plan: string | null
          role: string | null
        }
        Insert: {
          email?: string | null
          full_name?: string | null
          id: string
          plan?: string | null
          role?: string | null
        }
        Update: {
          email?: string | null
          full_name?: string | null
          id?: string
          plan?: string | null
          role?: string | null
        }
        Relationships: []
      }
      scans: {
        Row: {
          created_at: string | null
          device_info: Json | null
          id: string
          location: Json | null
          pet_id: string
          scanner_ip: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          device_info?: Json | null
          id?: string
          location?: Json | null
          pet_id: string
          scanner_ip?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          device_info?: Json | null
          id?: string
          location?: Json | null
          pet_id?: string
          scanner_ip?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scans_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scans_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      store_orders: {
        Row: {
          created_at: string | null
          id: string
          items: Json
          payment_info: Json | null
          shipping_address: Json
          status: string
          total_amount: number
          tracking_number: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          items: Json
          payment_info?: Json | null
          shipping_address: Json
          status?: string
          total_amount: number
          tracking_number?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          items?: Json
          payment_info?: Json | null
          shipping_address?: Json
          status?: string
          total_amount?: number
          tracking_number?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "store_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tips: {
        Row: {
          author_id: string | null
          category: string
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          title: string
          video_url: string | null
        }
        Insert: {
          author_id?: string | null
          category: string
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          title: string
          video_url?: string | null
        }
        Update: {
          author_id?: string | null
          category?: string
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          title?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tips_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          address: Json | null
          avatar_url: string | null
          created_at: string | null
          email: string
          first_name: string | null
          id: string
          language: string | null
          last_login: string | null
          last_name: string | null
          notification_settings: Json | null
          phone: string | null
          plan: string | null
          role: string | null
        }
        Insert: {
          address?: Json | null
          avatar_url?: string | null
          created_at?: string | null
          email: string
          first_name?: string | null
          id: string
          language?: string | null
          last_login?: string | null
          last_name?: string | null
          notification_settings?: Json | null
          phone?: string | null
          plan?: string | null
          role?: string | null
        }
        Update: {
          address?: Json | null
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: string
          language?: string | null
          last_login?: string | null
          last_name?: string | null
          notification_settings?: Json | null
          phone?: string | null
          plan?: string | null
          role?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_scan_count: {
        Args: { animal_id: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
